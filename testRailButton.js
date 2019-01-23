// name: Trigger tests for run
// description: Triggers automated tests for a test run
// author: Potapov
// version: 1.0
// includes: ^ runs / view
// excludes:

// js:
(function() {

  // button initialization
  const button = document.createElement('button')
  button.className = 'toolbar content-header-toolbar'
  // anchor initialization
  const anchor = document.createElement('a')
  anchor.href = 'javascript:void(0)'
  anchor.className = 'toolbar-button toolbar-button-last toolbar-button-first content-header-button button-start'
  anchor.innerText = 'Run UI Autotest'

  button.appendChild(anchor)

  document.querySelector('#content-header .content-header-inner').appendChild(button)

  button.addEventListener('click', () => {
    return fetch('http://jenkins.com', {method: 'POST', headers: {'Content-Type': 'application/json'}}).then(() => {
      location.reload()
      return
    }).then(_ => {
      App.Dialogs.message(
        'The tests are being processed in the background and the results are automatically posted back to TestRail. This page refreshes once the tests are finished.',
        'Confirmation'
      )
    }).catch(() => {
      App.Dialogs.error(
        'Under Construction. Please be patient.'
      );
    })
  })
})()
