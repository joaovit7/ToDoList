const connection = require('./connection');

const getAll = async () => {
    const [tasks] = await connection.execute('select * from tasks');
    return tasks;
};

const createtasks = async (task) => {

  const { title } = task;

  const dateUTC = new Date(Date.now()).toUTCString();

  const query = 'insert into tasks(title, status, created_at) values (?,?,?)';

  const [createdtask] = await connection.execute(query,[title,'pendente',dateUTC]);

  return {insertId: createdtask.insertId};
};

const deletetasks = async (req, res) => {

const removedtask = await connection.execute('delete from tasks where id = ?',[id]);

return removedtask;

};

const updatetasks = async (id, task) => {

const query = ('update tasks set title = ?, status = ? where id = ?');

const {title, status} = task

const updatedtask = await connection.execute(query,[title, status, id]);

return updatedtask;

};

module.exports = {
   getAll,
   createtasks,
   deletetasks,
   updatetasks,
};