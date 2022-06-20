// import React, { Component } from "react";
// import { Field, reduxForm } from "redux-form";

// class StreamForm extends Component {
//   renderError({ error, touched }) {
//     if (touched && error) {
//       return (
//         <div className="ui error message">
//           <div className="header">{error}</div>
//         </div>
//       );
//     }
//   }

//   renderInput = ({ input, label, meta }) => {
//     return (
//       <div className={`field ${meta.error && meta.touched ? "error" : ""}`}>
//         <label>{label}</label>
//         <input {...input} autoComplete="off" />
//         {this.renderError(meta)}
//       </div>
//     );
//   };

//   onSubmit = (formProps) => {
//     this.props.onSubmit(formProps);
//   };

//   render() {
//     return (
//       <div>
//         <form
//           onSubmit={this.props.handleSubmit(this.onSubmit)}
//           className="ui form error"
//         >
//           <Field
//             name="title"
//             label="Enter Title"
//             component={this.renderInput}
//           />
//           <Field
//             name="description"
//             label="Enter Description"
//             component={this.renderInput}
//           />
//           <button className="ui button primary">Submit</button>
//         </form>
//       </div>
//     );
//   }
// }

// const validate = (formValues) => {
//   const error = {};

//   if (!formValues.title) {
//     error.title = "you must enter a title";
//   }
//   if (!formValues.description) {
//     error.description = "You must enter description";
//   }
//   return error;
// };

// export default reduxForm({
//   form: "StreamForm",
//   validate,
// })(StreamForm);

import React from "react";
import { Form, Field } from "react-final-form";

const StreamForm = (props) => {
  const renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };

  const renderInput = ({ input, label, meta }) => {
    //console.log(label, meta);
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {renderError(meta)}
      </div>
    );
  };

  const onSubmit = (formValues) => {
    props.onSubmit(formValues);
  };

  return (
    <Form
      initialValues={props.initialValues}
      onSubmit={onSubmit}
      validate={(formValues) => {
        const errors = {};

        if (!formValues.title) {
          errors.title = "You must enter a title";
        }

        if (!formValues.description) {
          errors.description = "You must enter a description";
        }

        return errors;
      }}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className="ui form error">
          <Field name="title" component={renderInput} label="Enter Title" />
          <Field
            name="description"
            component={renderInput}
            label="Enter Description"
          />
          <button className="ui button primary">Submit</button>
        </form>
      )}
    />
  );
};

export default StreamForm;
