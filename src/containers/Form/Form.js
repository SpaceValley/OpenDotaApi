import {connect} from "react-redux";
import Form from '../../components/library/Form/Form';
import {fetchStart} from "../../actions";

const mapStateToProps = (state) => ({
    ...state
});

const mapDispatchToProps = {
    fetchStart
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
