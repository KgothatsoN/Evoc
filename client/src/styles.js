import {makeStyles} from '@material-ui/core';

export default makeStyles(() => ({
    titleBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      heading: {
        color: 'rgba(0,183,255, 1)',
      },
      image: {
        marginRight: '7px',
        paddingBottom: '8px',
      }
}));