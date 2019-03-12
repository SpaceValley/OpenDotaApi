import {connect} from "react-redux";
import HeroesPage from '../../components/HeroesPage/HeroesPage';


const mapStateToProps = (state) => {
    return {
        hasData: state.hasData,
        isLoading: state.isLoading
    };
};

export default connect(mapStateToProps)(HeroesPage);
