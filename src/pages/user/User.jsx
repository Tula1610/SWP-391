import { Link } from "react-router-dom";
import "./user.css"
import {
    MdPermIdentity, MdCalendarMonth, MdOutlinePhoneAndroid, MdMailOutline, MdPlace,
    MdPublish
} from "react-icons/md";

export default function User() {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newUser">
                    <button className="userAddButton">Create</button>
                </Link>
            </div>

            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="/assets/imgs/meow2.jpg" alt="" className="userShowImg" />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">Minh Hoang</span>
                            <span className="userShowUserTitle">Software Engineer</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <MdPermIdentity className="userShowIcon" />
                            <span className="userShowInfoTitle">Hoang1903</span>
                        </div>

                        <div className="userShowInfo">
                            <MdCalendarMonth className="userShowIcon" />
                            <span className="userShowInfoTitle">19.03.2003</span>
                        </div>

                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                            <MdOutlinePhoneAndroid className="userShowIcon" />
                            <span className="userShowInfoTitle">+84 1234 5678</span>
                        </div>

                        <div className="userShowInfo">
                            <MdMailOutline className="userShowIcon" />
                            <span className="userShowInfoTitle">Hoang1903@gmail.com</span>
                        </div>

                        <div className="userShowInfo">
                            <MdPlace className="userShowIcon" />
                            <span className="userShowInfoTitle">Vung Tau | HCM</span>
                        </div>
                    </div>
                </div>

                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input type="text"
                                    placeholder="Hoang1903"
                                    className="userUpdateInput" />
                            </div>

                            <div className="userUpdateItem">
                                <label>Fullname</label>
                                <input type="text"
                                    placeholder="Minh Hoang"
                                    className="userUpdateInput" />
                            </div>

                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input type="text"
                                    placeholder="Hoang1903@gmail.com"
                                    className="userUpdateInput" />
                            </div>

                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input type="text"
                                    placeholder="+84 1234 5678"
                                    className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input type="text"
                                    placeholder="Vung Tau | HCM"
                                    className="userUpdateInput" />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img className="userUpdateImg" src="/assets/imgs/meow2.jpg" alt="" />
                                <label htmlFor="file"><MdPublish className="userUpdateIcon" /></label>
                                <input type="file" id="file" style={{ display: "none" }} />
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
}
