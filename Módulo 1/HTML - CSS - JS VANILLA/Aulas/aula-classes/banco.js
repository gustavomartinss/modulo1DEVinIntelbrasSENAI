class Conta {
    numero;
    #saldo;

    constructor(numero) {
        this.numero = numero;
        this.#saldo = 0;
    }

    sacar(valor) {
        if (valor <= this.#saldo) {
            this.#saldo -= valor;
        }
    };
    depositar(valor) {
        this.#saldo += valor;
    };
}

const contaGustavo = new Conta("0001");
const contaKarla = new Conta("0005")

contaKarla.depositar(50);

contaKarla.sacar(2500);