import { css } from '@mono/styled-system/css'
import { Alert, Badge } from '@mono/ui'

function App() {

  return (
   <div className={css({
    padding: '24',
    fontSize: '3xl',
   })}>
    <Badge status='info'>Badge</Badge>
    <Alert
        status='info'
        kind='subtle'
        title='Alert'
        description='This is an alert'
      />
   </div>
  )
}

export default App
