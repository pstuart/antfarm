"use strict";
var util_1 = require("util");
var JobProperty = (function () {
    function JobProperty(key, value) {
        var jp = this;
        jp.key = key;
        jp.setValue(value);
    }
    JobProperty.prototype.setValue = function (value) {
        this.value = value;
        this.resolveType();
    };
    JobProperty.prototype.resolveType = function () {
        var jp = this;
        var type = typeof (jp.value);
        if (util_1.isArray(jp.value)) {
            jp.type = "array";
        }
        else {
            jp.type = type;
        }
    };
    JobProperty.prototype.getValue = function () {
        return this.value;
    };
    JobProperty.prototype.getType = function () {
        return this.type;
    };
    return JobProperty;
}());
exports.JobProperty = JobProperty;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9qb2Ivam9iUHJvcGVydHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQUFzQixNQUFNLENBQUMsQ0FBQTtBQUM3QjtJQU1JLHFCQUFZLEdBQVcsRUFBRSxLQUFVO1FBQy9CLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQztRQUNkLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRVMsOEJBQVEsR0FBbEIsVUFBbUIsS0FBVTtRQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVTLGlDQUFXLEdBQXJCO1FBQ0ksSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ2QsSUFBSSxJQUFJLEdBQUcsT0FBTSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QixFQUFFLENBQUMsQ0FBQyxjQUFPLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwQixFQUFFLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztRQUN0QixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixFQUFFLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNuQixDQUFDO0lBQ0wsQ0FBQztJQUVNLDhCQUFRLEdBQWY7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBRU0sNkJBQU8sR0FBZDtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFDTCxrQkFBQztBQUFELENBbENBLEFBa0NDLElBQUE7QUFsQ1ksbUJBQVcsY0FrQ3ZCLENBQUEiLCJmaWxlIjoibGliL2pvYi9qb2JQcm9wZXJ0eS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aXNBcnJheX0gZnJvbSBcInV0aWxcIjtcbmV4cG9ydCBjbGFzcyBKb2JQcm9wZXJ0eSB7XG5cbiAgICBwcm90ZWN0ZWQga2V5OiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIHZhbHVlOiBhbnk7XG4gICAgcHJvdGVjdGVkIHR5cGU6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGtleTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XG4gICAgICAgIGxldCBqcCA9IHRoaXM7XG4gICAgICAgIGpwLmtleSA9IGtleTtcbiAgICAgICAganAuc2V0VmFsdWUodmFsdWUpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBzZXRWYWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5yZXNvbHZlVHlwZSgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCByZXNvbHZlVHlwZSgpIHtcbiAgICAgICAgbGV0IGpwID0gdGhpcztcbiAgICAgICAgbGV0IHR5cGUgPSB0eXBlb2YoanAudmFsdWUpO1xuICAgICAgICBpZiAoaXNBcnJheShqcC52YWx1ZSkpIHtcbiAgICAgICAgICAgIGpwLnR5cGUgPSBcImFycmF5XCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBqcC50eXBlID0gdHlwZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFR5cGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnR5cGU7XG4gICAgfVxufSJdfQ==