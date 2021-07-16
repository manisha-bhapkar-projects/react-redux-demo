import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchUserDetail } from '../action/index';
// import { bindActionCreators } from 'redux';


function UserDetails({ userDetails, fetchUserDetails }) {
    const [getData, setData] = useState([]);


    useEffect(() => {
        fetchUserDetails()
            .then(response => {
                const userData = response.data
                console.log("userdata", userData);
                setData(userData)
                // console.log("setdata", userData);

            })
            .catch(error => {
                const errorMsg = error.message
            })

    }, [])

    return (
        <div>
            <h2>User Details</h2>
            {/* <div>
                {
                    // userDetails.map(user => <p key={user.id}>{user.name}</p>)
                    //   userDetails && userDetails.name
                    getData && getData.address.city 

                }

            </div> */}
            <p>{getData.name}</p>
            <p>{getData.email}</p>
            <div>
                <div>
                    {getData.address && (
                        <div>
                            <ul>{getData.address.zipcode}</ul>
                            <ul>{getData.address.city}</ul>
                            
                        </div>
                    )}

                {getData.company && (
                        <div>
                            <ul>{getData.company.name}</ul>
                            <ul>{getData.company.bs}</ul>
                            
                        </div>
                    )}
                </div>
            </div>






        </div>
    )
}

const mapStateToProps = state => {
    console.log(state);

    return {
        userDetails: state.user.userData
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUserDetails: () => dispatch(fetchUserDetail())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);





























// function UserDetails(props) {
//     const [users, setUser] = useState([])

//     useEffect(() => {
//         axios.get('https://jsonplaceholder.typicode.com/users' + props.match.params.id)
//             .then(res => {
//                 console.log(res);
//                 setUser(res)
//             })
//             .catch(err => {
//                 console.log(err);
//             })
//     }, [])

//     return (
//         <div>

//             <h1>User Details  </h1>
//             <ul>
//                 {users.map((user) => (
//                     <li key={user.id}>{user.title}</li>
//                 ))}
//             </ul>

//         </div>
//     )

// }



// export default UserDetails;