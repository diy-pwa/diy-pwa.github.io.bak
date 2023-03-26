import React from 'react';

// <DaysLedt> is:
//  - Lazy-loaded
//  - Loaded and rendered only in the browser
export default function(props) {
    const [Component, setComponent] = React.useState(() => Loading)
  
    // useEffect() callbacks are only run in the browser, consequently the map component
    // is loaded and rendererd only in the browser.
    React.useEffect(() => {
      setComponent(() => React.lazy(() => import('./InnerNav.jsx')))
    }, [])
  
    return (
      <React.Suspense fallback={<Loading />}>
        <Component navData={props.navData}/>
      </React.Suspense>
    )
  }
  
  function Loading() {
    return <span></span>
  }