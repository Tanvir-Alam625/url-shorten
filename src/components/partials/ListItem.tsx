import { Link } from 'react-router-dom';
import { Dropdown } from '../shared';
import { BiDotsHorizontal } from 'react-icons/bi';
import { IoMdOpen } from 'react-icons/io';
import { FiEdit } from 'react-icons/fi';
import { AiOutlineDelete } from 'react-icons/ai';

type PropsType = {
  index: number;
  shortUrl: string;
  longUrl: string;
  id: string;
  handleDeleteUrl: (id: string) => void;
};

const ListItem = ({ index, shortUrl, longUrl, id, handleDeleteUrl }: PropsType) => {
  return (
    <li className="flex flex-wrap items-center justify-between gap-2 rounded-primary bg-dark-50 p-4 text-sm">
      <div className="flex items-center gap-2">
        <p>{index}.</p>
        <Link to={longUrl} target="_blank" className="text-dark-700 hover:text-primary-500  hover:underline">
          {shortUrl}
        </Link>
      </div>
      <Dropdown>
        <Dropdown.Trigger>
          <span className="animate-fade-in-up hover:text-primary-500">
            <BiDotsHorizontal size={20} />
          </span>
        </Dropdown.Trigger>
        <Dropdown.Content width="150px">
          <Dropdown.Link href={longUrl} target="_blank" className="flex items-center gap-2">
            <IoMdOpen size={18} />
            Open Url
          </Dropdown.Link>
          <Dropdown.Link href={`/edit/${id}`} className="flex items-center gap-2">
            <FiEdit size={18} />
            Edit Url
          </Dropdown.Link>
          <Dropdown.Item>
            <button className="flex items-center gap-2" onClick={() => handleDeleteUrl(id)}>
              <AiOutlineDelete size={18} />
              Delete Url
            </button>
          </Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>
    </li>
  );
};

export default ListItem;
