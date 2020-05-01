import React from 'react';
import { action } from '@storybook/addon-actions';

import Task from './Task';

export default {
    component: Task,
    title: 'Task',
    excludeStories: /.*Data$/,
};

export const taskData = {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2020, 3, 28, 12, 52),
};

export const actionsData = {
    onPinTask: action('onPinTask'),
    onArchiveTask: action('onArchiveTask'),
};

export const Default = () => (
    <Task task={{ ...taskData }} { ...actionsData } />
);

// <Task {...actionsData}> is equivalent to
// <Task onPinTask={actionsData.onPinTask} onArchiveTask={actionsData.onArchiveTask}>

export const Pinned = () => (
    <Task task={{ ...taskData, state: 'TASK_PINNED' }} { ...actionsData } />
);

export const Archived = () => (
    <Task task={{ ...taskData, state: 'TASK_ARCHIVED' }} { ...actionsData } />
);