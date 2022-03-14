import React, { useState } from "react";
import LoginLayout from "../components/Layout/LoginLayout";
import BookAppointmentQuestionare from "../components/BookAppointmentQuestionare";
function BookAppointmentPage() {

  let [isSummary,setSummary]=useState(false)

  return (
    <LoginLayout isSummary={isSummary}>
      <BookAppointmentQuestionare setSummary={setSummary} />
    </LoginLayout>
  );
}

export default BookAppointmentPage;