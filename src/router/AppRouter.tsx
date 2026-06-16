import { BrowserRouter, Routes, Route } from "react-router-dom";

import  LandingPage from "../pages/LandingPage";
import EventListingPage from "../pages/EventListingPage";
import EventDetailsPage from "../pages/EventDetailsPage";
import RegistrationPage from "../pages/RegistrationPage";
import TeamDashboardPage from "../pages/TeamDashboard";
import SubmissionPage from "../pages/SubmissionPage";
import JudgeDashboardPage from "../pages/JudgeDashboard";
import OrganizerDashboardPage from "../pages/OrganizerDashboard";

import { ProtectedRoute } from "../components/ProtectedRoute";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route
          path="/events"
          element={<EventListingPage />}
        />

        <Route
          path="/events/:eventId"
          element={<EventDetailsPage />}
        />

        <Route
          path="/register/:eventId"
          element={<RegistrationPage />}
        />

        <Route
          path="/team"
          element={<TeamDashboardPage />}
        />

        <Route
          path="/submission"
          element={<SubmissionPage />}
        />

        <Route
          path="/judge"
          element={
            <ProtectedRoute role="judge">
              <JudgeDashboardPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/organizer"
          element={
            <ProtectedRoute role="organizer">
              <OrganizerDashboardPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}