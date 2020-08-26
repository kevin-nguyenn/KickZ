import { connect } from "react-redux";
import { addItem } from "../../actions/portfolio_actions";
import { fetchShoes } from "../../actions/shoe_actions";
// import { resetErrors } from "../../actions/errors";
// import { fetchPortfolio } from "../../utils/api-portfolio-util";

import PortfolioForm from "./portfolio_form";

const mapStateToProps = (state) => {
  let isLoggedIn = state.session.id ? true : false;
  return ({
    currentUser: (isLoggedIn ? state.entities.users : null),
    shoes: state.entities.shoes,
    portfolio: state.entities.portfolio,
    errors: state.errors.portfolio,
  });
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (id, item) => dispatch(addItem(id, item)),
  fetchShoes: () => dispatch(fetchShoes()),
  resetErrors: () => dispatch(resetErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioForm);
