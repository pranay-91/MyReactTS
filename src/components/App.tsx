import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {ActionCreators} from "../actions";

import "../styles/app.scss";

interface IAppProps {
  users: any;
  changeUser: any;
}

const mapStateToProps = (state) => ({ users: state.users});

const mapDispatchToProps = (dispatch: any) => bindActionCreators(ActionCreators, dispatch);

function App(props: IAppProps) {
  // tslint:disable-next-line:no-console
  console.log(props.users);
  return (
      // tslint:disable-next-line:jsx-no-multiline-js
    <div>{props.users.users.map((user, i) => (
        <div key={i}>
            <h1>{user.id}</h1>
            <h2>{user.name}</h2>
            <h3>{user.age}</h3>
        </div>
      ))}
      <button onClick={() => props.changeUser({ id: "2", name: "New", age: 48})}>Click</button>
    </div>
  );

}

export default connect(mapStateToProps, mapDispatchToProps)(App);
