import React, {Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getUsers, deleteUsers } from "../actions/data";
import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core/styles";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "50ch",
    backgroundColor: theme.palette.background.paper,
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
  },
  inline: {
    display: "inline",
  },
}));


const Users = ({ getUsers, deleteUsers, data: { users, loading } }) => {
  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const classes = useStyles();

  return loading ? (
    <div>Loading</div>
  ) : (
    <List className={classes.root}>
      {users.map((person) => (
        <ListItem alignItems="flex-start" key={person.id}>
          <ListItemAvatar>
            <Avatar alt={person.first_name} src={person.avatar} />
          </ListItemAvatar>
          <Fragment>
            <ListItemText
              primary={`${person.first_name} ${person.last_name}`}
              secondary={
                <Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    {person.email}
                  </Typography>
                </Fragment>
              }
            />
          <Button>
            <span className="material-icons">edit</span>
          </Button>
          <Button onClick={(e) => deleteUsers(person.id)}>
            <span className="material-icons">delete</span>
          </Button>
          </Fragment>
        </ListItem>
      ))}
    </List>
  );
};

Users.propTypes = {
  getUsers: PropTypes.func.isRequired,
  deleteUsers: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps, { getUsers, deleteUsers })(Users);
