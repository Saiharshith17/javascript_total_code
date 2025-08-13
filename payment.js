class PaymentRecommendationService {
  /**
   * @param {User} user The user object containing their context and payment instruments.
   * @param {Cart} cart The cart object containing the line of business and total amount.
   * @returns {PaymentInstrument[]} A sorted list of valid payment instruments.
   */
  getRecommendedPayments(user, cart) {

    const strategy=getStrategy(cart.lineOfBussiness);
    const {amount}=cart;

    const validInstruments=user.paymentInstruments.filter(instrument=>{
        if(instrument.type==='UPI'&&!user.userContext.deviceContext.isUpiEnabled){
            return false;
        }
        if(strategy.getInvalidTypes().includes(instruction.type)){
            return false;
        }
        const limits=strategy.getTransactionlimits();
        if(limits[instrument.type]&&amount>limits[instrument.type]){
            return false;
        }
        return true;
    });

    const sortedOrder=strategy.getSortedOrder();
    validInstruments.sort((a,b)=>{
        const indexA=sortedOrder.indexOf(a.type);
        const indexB=sortedOrder.indexOf(b.type);
        if(indexA!=indexB){
            return indexA-indexB;
        }
        return b.relevanceScore-a.relevanceScore;
    });
    return validInstruments;


    // TODO: Implement the filtering and sorting logic here.
    //
    // Your plan should be:
    // 1. Start with the user's full list of payment instruments.
    // 2. Apply the filtering rules one by one:
    //    - UPI Device Check
    //    - Line of Business (LOB) Check
    //    - Transaction Limit Check
    // 3. Sort the remaining, valid instruments using the LOB-specific ordering
    //    and then by the secondary relevance score.
    // 4. Return the final sorted list.

    return []; // Placeholder
  }
}

module.exports = PaymentRecommendationService;


class BasePaymentStrategy{
    getInvalidTypes(){
        return [];
    }
    getTransactionLimits(){
        return {};
    }
    getSortedOrder(){
        return [];
    }
}


class CommerceStrategy extends BasePaymentStrategy{
    getInvalidTypes(){
        return ['NetBanking'];
    }
 getTransactionLimits() {
    return {
      'CreditCard': 250000, // 2.5L
      'UPI': 100000,        // 1L
      'DebitCard': 200000,  // 2L
    };
  }

  getSortOrder() {
    return ['CreditCard', 'UPI', 'DebitCard'];
  }
}