import React, { Component } from 'react';
import './AnswerForm.css';

class AnswerForm extends Component {

    render() {

        return (
            <React.Fragment>
                <form className="TicketForm" >
                <h3>فرم پاسخ</h3>
                <div class="TicketInfo">
                    <h4>اطلاعات تیکت</h4>
                    <hr></hr>
                    <div><label>عنوان :</label><text class="title">مشکل در اتصال</text></div>
                    <div><label>محصول :</label><text class="product">مشکل در اتصال</text></div>
                    <div><label>ساختمان :</label><text class="dept">مشکل در اتصال</text></div>
                    <div><label>اولویت :</label><text class="priority">مشکل در اتصال</text></div>
                    <div><a href="" class="description">جزییات بیشتر</a></div>
                 </div>

                 <div class="RecentReply">
                     <h4>پاسخ های اخیر </h4>
                     <hr></hr>
                     <div><text class="status">تاریخ پاسخ :<label className="date">6/9/2019</label><a href="" class="description">مشاهده پاسخ</a></text></div>
                 </div>

                <div><textarea placeholder="توضیحات"></textarea></div>
                    <dive>
                    <button class="material-icons">send</button>
                    <button class="material-icons">attachment</button>
                    </dive>
                </form>
                
            </React.Fragment>

        );
    }
}
export default AnswerForm;