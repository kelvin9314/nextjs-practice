const Static = props => {
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>data fetching in build time</h2>
    </div>
  )
}

Static.getStaticProps = async () => {
  return {}
}

export default Static
