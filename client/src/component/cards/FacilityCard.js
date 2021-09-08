import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 400,
  },
});
const FacilityCard = ({ t }) => {
  const classes = useStyles();
  return (
    <div>
      {/* <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={t.image[0].url}
            title={t.machineName || t.facilityName}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {t.machineName || t.facilityName}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            <Link to={{ pathname: `/facility/${t._id}`, state: { t } }}>
              Show Details
            </Link>
          </Button>
        </CardActions>
      </Card> */}

      <div class="row_meltri01">
        <div class="column_meltri01">
          <img src={t.image[0].url} alt="img" width="250px"></img>
        </div>
        <div class="column_meltri01">
          <center>
            <h2>{t.facilityName}</h2>
            <p>{t.facilityId}</p>
            <Button variant="outline-secondary">
              <Link to={{ pathname: `/facility/${t._id}`, state: { t } }}>
                View Details
              </Link>
            </Button>
          </center>
        </div>
      </div>
    </div>
  );
};

export default FacilityCard;
