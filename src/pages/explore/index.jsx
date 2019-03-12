import React from 'react'

class Profile extends React.Component {
  componentDidMount() {}

  render() {
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__
    return (
      <div>
        <iframe
          width="100%"
          height="790"
          frameBorder="0"
          src="https://thadk.carto.com/builder/a6d93c2b-a949-4fd1-91c9-453ddea01b07/embed"
          allowFullScreen
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          oallowfullscreen="true"
          msallowfullscreen="true"
        />
      </div>
    )
  }
}

export default Profile
