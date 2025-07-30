export class query {
    public Page = 1;
    public Limit = 10;
    public PageNumber = 0 ;
    public PageSize = 0 ;
    public OrderBy = '';
    public OrderByOrder = 'ASC';
  
    public toOrderby() {
        if ( this.OrderByOrder == 'DESC' ) {
            this.OrderByOrder = 'ASC';
        } else {
            this.OrderByOrder = 'DESC';
        }
    }
  }