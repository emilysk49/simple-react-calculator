import React, {Component, useState} from 'react'
import './Calculator.css'
import Button from '../components/Button'
import Display from '../components/Display';

export default function Calculadora() {

    const [displayValue, setDisplayValue] = useState('0');
    const [clear, setClear] = useState(false);
    const [operation, setOperation] = useState(null)
    const [value, setValue] = useState('0')

    const clearMemory = () => {
        setDisplayValue('0')
        setClear(false)
        setOperation(null)
        setValue('0')
    }

    const defineOperation = (op) => {
        // se não foi definido operador AND usuário clicou em =
        if (operation === null && op === '=') {
            return
        } else if (operation === null && op !== '=') {
            // se não foi definido operador AND usuário clicou em operador (exceto =)
            setValue(displayValue)
            setClear(true)
            setOperation(op)
        } else if (operation !== null && clear && operation !== op) {
            // se foi definido operador AND não foi digitado número AND operador definido são diferentes
            // tratamento para caso usuário quer alterar operador
            setOperation(op)
        } else {
            // se já foi definido operador 
            const result = eval(`${value} ${operation} ${displayValue}`);
            const resultStr = String(result);
            const formatted = resultStr.length > 12 ? Number(result).toPrecision(9) : resultStr;
            setDisplayValue(formatted.toString());
            setValue(formatted.toString());
            setOperation(op)
            setClear(true)
        }
        
        if (op === '=') {
            setClear(true)
            setOperation(null)
        }
    };

    const addDigit = (digit) => {
      if (digit === '.' && displayValue.includes('.')) {
        return
      } else if (displayValue.length > 15 && !clear) {
        return
      } else if (displayValue === '0' || clear) {
        setDisplayValue(digit)
        setClear(false)
      } else {
        const newValue = displayValue + digit
        setDisplayValue(newValue)
      }
    };

    return (
      // className é mesma coisa que class
      <div className="calculator">
        <Display label="display" value={displayValue} />
        <Button label="AC" click={clearMemory} triple />
        <Button label="/" click={defineOperation} operation />
        <Button label="7" click={addDigit} />
        <Button label="8" click={addDigit} />
        <Button label="9" click={addDigit} />
        <Button label="*" click={defineOperation} operation />
        <Button label="4" click={addDigit} />
        <Button label="5" click={addDigit} />
        <Button label="6" click={addDigit} />
        <Button label="-" click={defineOperation} operation />
        <Button label="1" click={addDigit} />
        <Button label="2" click={addDigit} />
        <Button label="3" click={addDigit} />
        <Button label="+" click={defineOperation} operation />
        <Button label="0" click={addDigit} double />
        <Button label="." click={addDigit} />
        <Button label="=" click={defineOperation} operation />
      </div>
    );
}