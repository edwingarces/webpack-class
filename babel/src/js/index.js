import '../css/styles.css';
import search from './search';
import render from './render';

const id = prompt('Write an ID');
const data = await search(id);
render(data);
