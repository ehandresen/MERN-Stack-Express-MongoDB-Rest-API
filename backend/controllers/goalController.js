const goals = [
  {
    id: 1,
    text: 'goal 1',
  },
  {
    id: 2,
    text: 'goal 2',
  },
  {
    id: 3,
    text: 'goal 3',
  },
];

// @desc get all goals
// @route GET /api/goals
// @access Private
const getGoals = (req, res) => {
  res.status(200).json(goals);
};

// @desc get single goal
// @route GET /api/goals:id
// @access Private
const getGoal = (req, res) => {
  console.log(req.params);
  const id = parseInt(req.params.id);
  res.status(200).json(goals.find((goal) => goal.id === id));
};

// @desc create a goal
// @route POST /api/goals
// @access Private
const createGoal = (req, res) => {
  console.log(req.body);
  res.status(200).json(goals);
};

// @desc update a goal
// @route PUT /api/goals/:id
// @access Private
const updateGoal = (req, res) => {
  res.status(200).json(goals);
};

// @desc delete a goal
// @route DELETE /api/goals/:id
// @access Private
const deleteGoal = (req, res) => {
  res.status(200).json(goals);
};

export { getGoals, getGoal, createGoal, updateGoal, deleteGoal };
