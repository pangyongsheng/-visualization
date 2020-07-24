//队列 先进先出
const Queue = function () {
	// 保存数据
	let items = [];
	// enqueue方法
	this.enqueue = function (element) {
		items.push(element);
	};
	// dequeue 方法
	this.dequeue = function () {
		return items.shift();
	};
	// front 方法
	this.front = function () {
		return items[0];
	};
	// isEmpty 方法
	this.isEmpty = function () {
		return items.length === 0;
	};

	// size方法
	this.size = function () {
		return items.length;
	};

	// print 调试方法
	this.print = function () {
		console.log(items.toString());
	};
};

// 优先队列
function PriorityQueue() {
  let items = [];

  function QueueElement(element, priority) {
    // {1}
    this.element = element;
    this.priority = priority;
  }

  this.enqueue = function(element, priority) {
    var queueElement = new QueueElement(element, priority);

    if (this.isEmpty()) {
      items.push(queueElement); // {2}
    } else {
      var added = false;

      for (var i = 0; i < items.length; i++) {
        if (queueElement.priority < items[i].priority) {
          items.splice(i, 0, queueElement); // {3}
          added = true;
          break; // {4}
        }
      }

      if (!added) {
        //{5}
        items.push(queueElement);
      }
    }
  };
  this.print = function() {
    console.log(items);
  };
  this.isEmpty = function() {
    return items.length === 0;
  };
}

export {
	Queue,
	PriorityQueue
}