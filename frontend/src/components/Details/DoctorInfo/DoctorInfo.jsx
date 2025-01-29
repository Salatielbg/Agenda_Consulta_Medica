import styles from './DoctorInfo.module.css';
import PropTypes from 'prop-types';

DoctorInfo.propTypes = {
    biografia: PropTypes.string,
    especialidades: PropTypes.string
}
export default function DoctorInfo(props){
    return(
        <div className={styles.DoctorInfo}>
            <h3>Biography</h3>
            <p>{props.biografia}</p>

            <h3>Specialities</h3>
            <p>{props.especialidades}</p>

        </div>

    )

}