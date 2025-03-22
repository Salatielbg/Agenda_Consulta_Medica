import BackArrow from '../../../assets/images/Icons/voltar.png'
import styles from './TopBar.module.css'
import { Link } from "react-router";
import PropTypes from 'prop-types';

TopBar.propTypes = {
    name: PropTypes.string
}

export default function TopBar({name}){
    return(
    
        <div className={styles.TopBar}>
            <Link to='/'>
                <img src={BackArrow} alt="Voltar" />
            </Link>
            <h3>{name}</h3>
        </div>
    

    )
}