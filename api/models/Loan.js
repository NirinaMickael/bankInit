let connection = require('../config/db')

class Loan{
    static create(object, cb){
        connection.query(
            'INSERT INTO Loan SET Responsible=?, Client=?, Amount=?, Percentage=?, RepaymentFrequency=?, ImplementationDate=?, RepaymentEndDate=?, BenefitPaymentMethod=?, CapitalPaymentMethod=?, Remark=?',
            [object.responsible, object.client, object.amount, object.percentage, object.repaymentFrequency, object.loanDate, object.repaymentEndDate, object.benefitPaymentMethod, object.capitalPaymentMethod, object.remark],
            (err, resultat)=>{
                if(err) throw err
                cb(resultat)
            }
        )
    }
}

module.exports = Loan