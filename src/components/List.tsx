import { Sub } from '../types';

interface Props {
  subs: Array<Sub>
}

const List = ({ subs }: Props) => {
  const renderList = () : JSX.Element[] => {
    return subs.map((sub) => (
      <li key={sub.nick}>
        <img src={sub.avatar} alt={sub.nick} />
        <div>
          <h2>{sub.nick}</h2>
          <p>{sub.description?.substring(0, 100)}</p>
          <p>Subscribed for {sub.subMonth} months</p>
        </div>
      </li>
    ))
  };
    return (
        <ul>
        {renderList()}
      </ul>
    )
}

export default List;