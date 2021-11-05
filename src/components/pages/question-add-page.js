import React from 'react';
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { useTitle } from "../hooks";
import QuestionAddContainer from "Containers/question-add-container";

const QuestionAddPage = ({ isLogged }) => {
    useTitle('Create Question');
    return  <QuestionAddContainer />;
};

const mapStateToProps = ({ user }) => ({ isLogged: user.isLogged });

export default connect(mapStateToProps)(QuestionAddPage);