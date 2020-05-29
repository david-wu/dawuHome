
import { FileType } from './file-type.enum';

export class File {
  public id: string;
  public childIds: string[];
  public type?: FileType;
  public label: string = '';
}