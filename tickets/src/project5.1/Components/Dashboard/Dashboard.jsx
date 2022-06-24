import DashboardCSS from './Dashboard.module.scss';

import Button from '../../../Button/Button';

function Dashboard(props) {
  const {data, action, more} = props;


  return (
    <div className={DashboardCSS.dashboard}>
      <h2 className={DashboardCSS.title}>{data.length ? 'Images' : ''}</h2>
      <div className={DashboardCSS.wrapper}>
        {
          data.map(item => {
            const {id, largeImageURL} = item;
            return (
              <img key={id} src={largeImageURL} onClick={action} alt="image"/>
            )
          })
        }
      </div>
      {
        data.length ? 
          <Button 
            className={DashboardCSS.button}
            text='Load more'
            action={() => more()}
            name='load'
          />
        : 
        ''
      }
    </div>
  );
}

export default Dashboard;