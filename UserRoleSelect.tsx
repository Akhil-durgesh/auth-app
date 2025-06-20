import React from 'react';

type UserRoleSelectProps = {
  onSelect: (role: 'student' | 'teacher') => void;
};

export const UserRoleSelect: React.FC<UserRoleSelectProps> = ({ onSelect }) => {
  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h2>Welcome!</h2>
      <p>Are you logging in as a student or a teacher?</p>
      <button
        onClick={() => onSelect('student')}
        style={{ margin: '10px', padding: '10px 20px' }}
      >
        Student
      </button>
      <button
        onClick={() => onSelect('teacher')}
        style={{ margin: '10px', padding: '10px 20px' }}
      >
        Teacher
      </button>
    </div>
  );
};
