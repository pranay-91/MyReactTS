import React, { Component } from "react";
import { connect, Dispatch } from "react-redux";
import { ActionCreators } from "../actions";

interface IStateProps {
    data: any;
    error: object;
    fetching: boolean;
}
interface IDispatchProps {
  fetchData: () => ActionCreators.IAction;
}
interface IDashboardProps extends IStateProps, IDispatchProps {}

const mapStateToProps = (state: any): IStateProps =>
({data: state.client.data, error: state.client.error, fetching: state.client.fetching});

const mapDispatchToProps = (
  dispatch: Dispatch<ActionCreators.IAction>,
): IDispatchProps => ({
  fetchData: () => dispatch(ActionCreators.fetchData()),
});

class Dashboard extends Component<IDashboardProps, {}> {
  constructor(props) {
    super(props);
  }

  public componentWillMount() {
    this.props.fetchData();
  }

  public render() {
    const renderData = (
      <div className="dashboard_data">
        <div>User ID: {this.props.data.userId} </div>
        <br />
        <div>Id:{this.props.data.id} </div>
        <br />
        <div>Title: {this.props.data.title} </div>
        <br />
        <div>Body: {this.props.data.body} </div>
      </div>
    );

    return (
      <div className="dashboard">
        {this.props.fetching ? <div>Loading Data</div> : renderData}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
