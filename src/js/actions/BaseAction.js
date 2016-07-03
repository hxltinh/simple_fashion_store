import { getAuth } from '../helpers/local-storage';

export default class BaseAction {

  sendStatus(type) { return { type }; }
  
  sendStatusWithData(type, data) { return { type, data }; }

}
