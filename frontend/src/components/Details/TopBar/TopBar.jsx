import BackArrow from '../../../assets/images/Icons/voltar.png'
import styles from './TopBar.module.css'
import { Link } from "react-router";
export default function TopBar(){
    return(
    
        <div className={styles.TopBar}>
            <Link to='/'>
                <img src={BackArrow} alt="Voltar" />
            </Link>
            <h3>Detail Doctor</h3>
        </div>
    

    )
}