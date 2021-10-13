import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux'


const UserContainer = ({ _fetchUsers, _userData }) => {

  useEffect(() => {
    _fetchUsers()
  }, [_fetchUsers])

  return (
    <>
      {_userData.loading ?
        (<h2>--- Loading ---</h2>) :
        _userData.error ?
          (<h2>{_userData.error}</h2>) :
          (
            <>
              <h2>User List</h2>
              {
                _userData &&
                _userData.users &&
                _userData.users.map(u => <p key={u.id}>{u.name}</p>)
              }
            </>
          )
      }
    </>
  )
}

const mapStateToProps = state => ({ _userData: state.r_user })
const mapDispatchToProps = dispatch => ({ _fetchUsers: () => dispatch(fetchUsers()) })

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
