import React from "react";
import { ProfilePage } from "./ProfilePage";
import { connect } from "react-redux";
import { AppStateType } from "../../../redux/redux-store";
import {
  ApiUserProfileType,
  getProfile,
  getStatus,
  updateStatus,
  uploadNewProfilePhoto,
  saveNewProfileInfo,
} from "../../../redux/reducers/profile-reducer";
import { PostType } from "../Posts/Posts";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { compose } from "redux";
import { Preloader } from "../../../utils/preloader/Preloader";

type MapStateToPropsType = {
  profile: ApiUserProfileType | null;
  posts: Array<PostType>;
  status: string;
  preloader: boolean;
  authorisedUserId: string | null;
  isAuth: boolean;
  isOwner: boolean;
};
type MapDispatchPropsType = {
  getProfile: (userId: string) => void;
  getStatus: (userId: string) => void;
  updateStatus: (status: string) => void;
  uploadNewProfilePhoto: (photo: File) => void;
  saveNewProfileInfo: (formData: ApiUserProfileType) => Promise<any>;
};
type PathParamType = {
  userId: string;
  status: string;
};
type ContainerType = MapStateToPropsType & MapDispatchPropsType;
export type ProfileContainerType = RouteComponentProps<PathParamType> &
  ContainerType;

class ProfileContainer extends React.Component<ProfileContainerType> {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorisedUserId as string;
      if (!userId) {
        this.props.history.push("/login");
      }
    }
    this.props.getProfile(userId);
    this.props.getStatus(userId);
  }

  render() {
    if (this.props.preloader) return <Preloader />;
    return (
      <ProfilePage
        saveNewProfileInfo={this.props.saveNewProfileInfo}
        profile={this.props.profile}
        posts={this.props.posts}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
        isOwner={!this.props.match.params.userId}
        uploadNewProfilePhoto={this.props.uploadNewProfilePhoto}
      />
    );
  }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    profile: state.profilePage.profile,
    posts: state.profilePage.posts,
    status: state.profilePage.status,
    preloader: state.preloader.preloader,
    authorisedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
    isOwner: state.auth.isOwner,
  };
};

export default compose<React.ComponentType>(
  connect(mapStateToProps, {
    getProfile,
    getStatus,
    updateStatus,
    uploadNewProfilePhoto,
    saveNewProfileInfo,
  }),
  withRouter,
)(ProfileContainer);
