import Link from 'next/link'
import { connect, useSelector } from 'react-redux'
import Clock from './Clock'
import AddCount from './AddCount'
import { getBaseApiUrl } from '../store/config/selector'

const Page = ({ title, linkTo, tick }) => {
  const baseApiUrl = useSelector(getBaseApiUrl)
return (
  <div>
    <h1>{title}</h1>
    <p>Base API URL: {baseApiUrl}</p>
    <Clock lastUpdate={tick.lastUpdate} light={tick.light} />
    <AddCount />
    <nav>
      <Link href={linkTo}>
        <a>Navigate</a>
      </Link>
    </nav>
  </div>
)
}

export default connect((state) => state)(Page)
