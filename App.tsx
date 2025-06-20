import React, { useState } from 'react';
import { UserRoleSelect } from './components/UserRoleSelect';
import { StudentRegister } from './components/StudentRegister';
import { TeacherRegister } from './components/TeacherRegister';
import { StudentLogin } from './components/StudentLogin';
import { TeacherLogin } from './components/TeacherLogin';

// Replace these with your actual backend API base URL
const API_BASE_URL = 'http://localhost:3000/api'; // Example, adjust as needed

type AppState = {
  role: 'student' | 'teacher' | null;
  mode: 'register' | 'login' | null;
};

const App: React.FC = () => {
  const [state, setState] = useState<AppState>({
    role: null,
    mode: null,
  });

  const handleRoleSelect = (role: 'student' | 'teacher') => {
    setState((prev) => ({ ...prev, role }));
  };

  const handleBack = () => {
    setState((prev) => ({
      ...prev,
      mode: null,
    }));
  };

  // API Call: Student Register
  const handleStudentRegister = async (email: string, password: string) => {
    try {
      const response = await fetch(`${API_BASE_URL}/student/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        alert('Student registered successfully!');
      } else {
        alert(data.message || 'Student registration failed');
      }
    } catch (error) {
      alert('Network error');
    }
  };

  // API Call: Teacher Register
  const handleTeacherRegister = async (email: string, password: string) => {
    try {
      const response = await fetch(`${API_BASE_URL}/teacher/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        alert('Teacher registered successfully!');
      } else {
        alert(data.message || 'Teacher registration failed');
      }
    } catch (error) {
      alert('Network error');
    }
  };

  // API Call: Student Login
  const handleStudentLogin = async (email: string, password: string) => {
    try {
      const response = await fetch(`${API_BASE_URL}/student/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        alert('Student logged in successfully!');
        // Optionally store token: localStorage.setItem('token', data.token);
      } else {
        alert(data.message || 'Student login failed');
      }
    } catch (error) {
      alert('Network error');
    }
  };

  // API Call: Teacher Login
  const handleTeacherLogin = async (email: string, password: string) => {
    try {
      const response = await fetch(`${API_BASE_URL}/teacher/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        alert('Teacher logged in successfully!');
        // Optionally store token: localStorage.setItem('token', data.token);
      } else {
        alert(data.message || 'Teacher login failed');
      }
    } catch (error) {
      alert('Network error');
    }
  };

  if (!state.role) {
    return <UserRoleSelect onSelect={handleRoleSelect} />;
  }

  if (!state.mode) {
    return (
      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <h2>Are you a new or returning {state.role}?</h2>
        <button
          onClick={() => setState((prev) => ({ ...prev, mode: 'register' }))}
          style={{ margin: '10px', padding: '10px 20px' }}
        >
          Register
        </button>
        <button
          onClick={() => setState((prev) => ({ ...prev, mode: 'login' }))}
          style={{ margin: '10px', padding: '10px 20px' }}
        >
          Login
        </button>
        <button
          onClick={() => setState({ role: null, mode: null })}
          style={{ margin: '10px', padding: '10px 20px' }}
        >
          Back
        </button>
      </div>
    );
  }

  if (state.role === 'student' && state.mode === 'register') {
    return (
      <StudentRegister
        onSubmit={handleStudentRegister}
        onBack={handleBack}
      />
    );
  }

  if (state.role === 'teacher' && state.mode === 'register') {
    return (
      <TeacherRegister
        onSubmit={handleTeacherRegister}
        onBack={handleBack}
      />
    );
  }

  if (state.role === 'student' && state.mode === 'login') {
    return (
      <StudentLogin
        onSubmit={handleStudentLogin}
        onBack={handleBack}
      />
    );
  }

  if (state.role === 'teacher' && state.mode === 'login') {
    return (
      <TeacherLogin
        onSubmit={handleTeacherLogin}
        onBack={handleBack}
      />
    );
  }

  return null;
};

export default App;
