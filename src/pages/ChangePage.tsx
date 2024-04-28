import { useParams } from 'react-router-dom';
import ChangeCard from '../components/ChangeCard/ChangeCard';

const ChangePage = () => {
  const { id } = useParams();

  return (
    <div className="container">
      <ChangeCard id={Number(id)} />
    </div>
  )
}

export default ChangePage
