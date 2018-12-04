-- DB Version: 10
-- OS Type: linux
-- DB Type: oltp
-- Total Memory (RAM): 4 GB
-- CPUs num: 4
-- Connections num: 25
-- Data Storage: ssd

-- dw -- Data Warehouse
--   * Typically I/O- or RAM-bound
--   * Large bulk loads of data
--   * Large complex reporting queries
--   * Also called "Decision Support" or "Business Intelligence"
--
-- oltp -- Online Transaction Processing
--   * Typically CPU- or I/O-bound
--   * DB slightly larger than RAM to 1TB
--   * 20-40% small data write queries
--   * Some long transactions and complex read queries
--
-- web -- Web Application
--   * Typically CPU-bound
--   * DB much smaller than RAM
--   * 90% or more simple queries
--
-- mixed -- Mixed DW and OLTP characteristics
--   * A wide mixture of queries
--
-- desktop -- Not a dedicated database
--   * A general workstation, perhaps for a developer

ALTER SYSTEM SET
 max_connections = '100';
ALTER SYSTEM SET
 shared_buffers = '1GB';
ALTER SYSTEM SET
 effective_cache_size = '3GB';
ALTER SYSTEM SET
 maintenance_work_mem = '256MB';
ALTER SYSTEM SET
 checkpoint_completion_target = '0.7';
ALTER SYSTEM SET
 wal_buffers = '16MB';
ALTER SYSTEM SET
 default_statistics_target = '100';
ALTER SYSTEM SET
 random_page_cost = '4';
ALTER SYSTEM SET
 effective_io_concurrency = '2';
ALTER SYSTEM SET
 work_mem = '5242kB';
ALTER SYSTEM SET
 min_wal_size = '1GB';
ALTER SYSTEM SET
 max_wal_size = '2GB';
ALTER SYSTEM SET
 max_worker_processes = '4';
ALTER SYSTEM SET
 max_parallel_workers_per_gather = '2';
ALTER SYSTEM SET
 max_parallel_workers = '4';
