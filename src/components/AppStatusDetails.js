import React from 'react';
import { connect } from 'react-redux';

const AppStatusDetails = ({appData}) => (
    <div>
        <h1>Your Application is Under Review</h1>
        <p>
            {appData.id} <br />
            {appData.name} <br />
            {appData.ein}
        </p>
    </div>
)

export const mapStateToProps = (state) => ({
  appData: state.appData
})

// export const mapDispatchToProps = (dispatch) => ({
//   onTextChange: (e) => {
//     e.preventDefault()
//     dispatch( inputChange(e.target.id, e.target.value) )
//   },
//   onSubmit: (history) => {
//     dispatch( onAppSubmit(history) )
//   },
// })

export default connect(mapStateToProps, null)(AppStatusDetails)
