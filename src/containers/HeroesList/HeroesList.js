import {connect} from "react-redux";
import HeroesList from '../../components/HeroesList/HeroesList';

const mapStateToProps = (state) => {
    return {
        heroes: state.heroes
    };
};

export default connect(mapStateToProps)(HeroesList);
