import styles from './approval.module.css'

function AddRow ({index, value, onChangeInput}) {

    

    return (
        <>
            <tr key={index} className={styles.inputRow}>
                <td className={styles.td3}><input type="text" name="productName"/></td>
                <td className={styles.td3}><input type="text" name="productSize"/></td>
                <td className={styles.td3}><input type="number" name="amount" onChange={e => onChangeInput('amount', e.target.value)}/></td>
                <td className={styles.td3}><input type="number" name="price" onChange={e => onChangeInput('price', e.target.value)}/></td>
                <td className={styles.td3}>{(value.price * value.amount).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}원</td>
                <td className={styles.td3}><input type="text" name="note"/></td>
            </tr>
        </>
    )
}

export default AddRow;