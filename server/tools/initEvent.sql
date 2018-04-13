-- set GLOBAL event_scheduler = ON; 
set time_zone = '+8:00'; 

use cAuth;

drop event if exists resetShare;

create event resetShare

on schedule every 1 day starts timestamp '2014-07-30 10:00:00'

do update cSessionInfo set shareStatus=1 where shareStatus=0 ; 

drop event if exists resetWeek;

create event resetWeek

on schedule every 1 week starts timestamp '2014-07-30 10:00:00'

do update cSessionInfo set weekscore=0 where weekscore>0 ;
