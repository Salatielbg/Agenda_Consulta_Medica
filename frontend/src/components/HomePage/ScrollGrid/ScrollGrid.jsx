import styles from './ScrollGrid.module.css';
import PropTypes from 'prop-types';
import { Link } from "react-router";

ScrollGrid.propTypes = {
    _id: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    specialty: PropTypes.string,
    rating: PropTypes.string

}

export default function ScrollGrid(props) {
    return (
        <Link to={`/Details/${props._id}`}>
            <div className={styles.scrollGrid}>
            
                <div className={styles.scrollGridImage}>
                    <img src={props.image} alt="Cardiologista" />
                </div>
                <div className={styles.scrollGridContent}>
                    <h3>{props.name}</h3>
                    <h4>{props.specialty}</h4>
                    <p>{props.rating}</p>
                </div>
            </div>
        </Link>
    )
}

