let connection = require('../config/db')

class Loan{
    static create(object, cb){
        connection.query(
            `select ID from Responsible where Surname ='${object.responsible.split(" ")[0]}';`,
            (err1, result1) => {
                if (err1) throw err1
                let idResponsible = result1[0].ID
                connection.query(
                    `select ID from PaymentMethod where Label ='${object.benefitPaymentMethod}';`,
                    (err2, result2) => {
                        if (err2) throw err2
                        let idBenefit = result2[0].ID
                        connection.query(
                            `select ID from PaymentMethod where Label ='${object.capitalPaymentMethod}';`,
                            (err3, result3) => {
                                if (err3) throw err3
                                let idCapital = result3[0].ID
                                connection.query(
                                    'INSERT INTO Loan SET Responsible=?, Amount=?, Percentage=?, RepaymentFrequency=?, ImplementationDate=?, RepaymentEndDate=?, BenefitPaymentMethod=?, CapitalPaymentMethod=?, Remark=?',
                                    [idResponsible, object.amount, object.percentage, object.repaymentFrequency, object.loanDate, object.repaymentEndDate, idBenefit, idCapital, object.remark],
                                    (err, resultat)=>{
                                        if(err) throw err
                                        cb(resultat)})})})})}}

module.exports = Loan